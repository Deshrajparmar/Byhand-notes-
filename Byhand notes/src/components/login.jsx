import { useState } from "react";
import { Link } from "react-router-dom";
import { Feather, Eye, EyeOff, ArrowLeft } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login details:", formData);
    alert("Login form is working! Backend authentication is not connected yet.");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#292820] flex flex-col">
      {/* Top navigation */}
      <header className="px-6 sm:px-10 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#292820]"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAE2D5]">
            <Feather size={21} />
          </span>
          <span className="text-xl font-serif font-semibold">
            Byhand Notes
          </span>
        </Link>
      </header>

      {/* Login form */}
      <main className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#716D63] hover:text-[#292820] mb-8"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#987C59] mb-3">
              Welcome back
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-4">
              Your words are waiting.
            </h1>

            <p className="text-[#716D63] leading-7">
              Sign in to continue reading, writing, and sharing your stories.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-3.5 outline-none transition focus:border-[#987C59] focus:ring-2 focus:ring-[#987C59]/15"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-[#987C59] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[#E2DBCF] bg-[#FFFEFB] px-4 py-3.5 pr-12 outline-none transition focus:border-[#987C59] focus:ring-2 focus:ring-[#987C59]/15"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#716D63] hover:text-[#292820]"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#292820] px-4 py-3.5 font-medium text-white transition hover:bg-[#454235] active:scale-[0.99]"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-sm text-[#716D63] mt-7">
            New to Byhand Notes?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#987C59] hover:underline"
            >
              Create an account
            </Link>
          </p>

          <div className="mt-12 border-t border-[#E2DBCF] pt-5 text-center">
            <p className="font-serif italic text-[#716D63]">
              Stories by people, for people.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;