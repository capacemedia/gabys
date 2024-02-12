const Banner = () => {
  return (
    <div className="w-full py-3  bg-brand-primary layout">
      <ul className="flex items-center justify-center gap-3 text-white text-[14px]">
        <li>YOUR SECRET IS SAFE WITH US✓ Betala med Klarna</li>
        {"|"}
        <li>✓Diskret Leverans</li>
        {"|"}
        <li>✓ Frakt 69kr</li>
        {"|"}
        <li>✓ Fri frakt över 999kr</li>
      </ul>
    </div>
  );
};

export default Banner;
