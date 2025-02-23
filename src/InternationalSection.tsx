import searchModal from "@/assets/search-modal.avif";

export default function InternationalSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 w-full px-8 mx-auto max-w-6xl">
      <img
        src={searchModal}
        className="w-lg md:w-1/2 lg:w-auto lg:max-w-lg md:p-0 mt-6 md:mt-0"
      />
      <div className="flex flex-col gap-5 md:p-0 md:max-w-md justify-center">
        <div className="text-3xl font-medium max-w-sm mx-auto md:mx-0 text-center md:text-left">
          Search by multiple cities and nationalities at once.
        </div>
        <div className="text-zinc-500 font-medium md:max-w-md text-center md:text-left">
          Easily get matches across multiple locations ahead of your travels.
          Search based on nationality and other filters previously{" "}
          <strong className="text-white">
            not available on any other dating apps.
          </strong>
        </div>
      </div>
    </div>
  );
}
