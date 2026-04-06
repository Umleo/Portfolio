export default function HoverBox() {
  return (
    <div className="absolute -top-5 left-1/2 flex flex-col items-center pointer-events-none">
      {/* Esta é a box que aparece */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-end border-2 rounded-2xl p-2 border-yellow-500 bg-amber-100/90 text-yellow-500 shadow-[0_0_px_rgba(251,191,36,0.22)]00 italic ">
        <span>Em desenvolvimento - 🚧</span>
      </div>
    </div>
  );
}
