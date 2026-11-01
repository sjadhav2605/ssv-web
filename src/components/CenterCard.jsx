export default function CenterCard({ center }) {
  return (
    <article className="overflow-hidden border border-slate-300 bg-[#fbfaf6]">
      <div className="flex aspect-[5/2] items-center justify-center bg-white">
        <img src={center.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex h-28 flex-col bg-[#122a66] px-4 py-3 text-white">
        <h3 className="line-clamp-1 text-base font-extrabold leading-tight">{center.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-white/80">{center.detail}</p>
        <a href={center.map} target="_blank" rel="noreferrer" className="mt-auto text-sm font-extrabold text-white underline">
          Directions
        </a>
      </div>
    </article>
  )
}
