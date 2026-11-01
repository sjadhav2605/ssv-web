import { createServer } from "node:http"
import { readFile, stat } from "node:fs/promises"
import { extname, join, normalize, sep } from "node:path"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("./dist/", import.meta.url))
const port = Number(process.env.PORT) || 4173
const host = "0.0.0.0"

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

function fileFor(urlPath) {
  const pathname = decodeURIComponent((urlPath || "/").split("?")[0])
  const relative = normalize(pathname).replace(/^(\.\.[/\\])+/, "").replace(/^[/\\]+/, "")
  const full = join(root, relative)
  if (full !== root && !full.startsWith(root + sep) && !full.startsWith(root)) return null
  return full
}

const server = createServer(async (req, res) => {
  try {
    let filePath = fileFor(req.url)
    if (!filePath) {
      res.writeHead(400)
      res.end("Bad request")
      return
    }

    let exists = false
    try {
      const info = await stat(filePath)
      if (info.isDirectory()) filePath = join(filePath, "index.html")
      exists = true
    } catch {
      exists = false
    }

    if (!exists || extname(filePath) === "") {
      try {
        await stat(filePath)
      } catch {
        if (extname(new URL(req.url || "/", "http://localhost").pathname)) {
          res.writeHead(404)
          res.end("Not found")
          return
        }
        filePath = join(root, "index.html")
      }
    }

    const body = await readFile(filePath)
    res.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" })
    res.end(body)
  } catch {
    res.writeHead(500)
    res.end("Server error")
  }
})

server.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`)
})
