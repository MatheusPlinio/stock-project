export default function Home() {
  return (
    <div className="w-full max-w-md border-2 rounded-3xl shadow-2xl">
      <div
        className="text-center font-extrabold"
        style={{ fontSize: "125px" }}
      >
        <span className="text-blueb2bit">b2b</span><span className="text-yellowb2bit">it</span>
      </div>
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            placeholder="@gmail.com"
            className="shadow appearance-none
                       border rounded w-full
                       py-2 px-3 text-gray-700
                       leading-tight focus:outline-none
                       focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 
                       text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="******************"
            className="shadow appearance-none
                       border rounded w-full
                       py-2 px-3 text-gray-700
                       leading-tight focus:outline-none
                       focus:shadow-outline"
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="w-full bg-blueb2bit hover:bg-blueb2bithover
                       text-white font-bold py-2 px-4
                       rounded focus:outline-none 
                       focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
