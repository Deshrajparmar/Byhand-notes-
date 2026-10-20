
import { useState } from "react";
import { Link } from "react-router-dom";
import { Feather, Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    console.log("Signup form data:", formData);
    alert("Signup UI is working! Backend integration comes next.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F5EF] px-5 py-12 text-[#292820]">
      <div className="w-full max-w-md">

        {/* Brand */}
        <Link
          to="/"
          className="mb-10 flex items-center justify-center gap-2"
        >
          <Feather size={28} strokeWidth={1.6} />
          <span className="font-serif text-2xl font-semibold">
            Byhand Notes
          </span>
        </Link>

        {/* Signup Card */}
        <div className="rounded-2xl border border-[#E2DBCF] bg-[#FCFAF6] p-7 shadow-sm sm:p-10">

          <div className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#987C59]">
              Your story starts here
            </p>

            <h1 className="font-serif text-3xl font-medium sm:text-4xl">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#716D63]">
              Join a community where your words matter.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Your name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="What should we call you?"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full rounded-lg border border-[#D6CFC2] bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-[#AAA294] focus:border-[#987C59] focus:ring-2 focus:ring-[#987C59]/15"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full rounded-lg border border-[#D6CFC2] bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-[#AAA294] focus:border-[#987C59] focus:ring-2 focus:ring-[#987C59]/15"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-lg border border-[#D6CFC2] bg-transparent px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-[#AAA294] focus:border-[#987C59] focus:ring-2 focus:ring-[#987C59]/15"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#817969] hover:text-[#292820]"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <p className="mt-2 text-xs text-[#817969]">
                Use at least 8 characters.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#292820] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#454337] active:scale-[0.99]"
            >
              Create account <span>↗</span>
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-[#716D63]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#987C59] underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center font-serif text-sm italic text-[#817969]">
          Every voice has a place here.
        </p>
      </div>
    </div>
  );
};

export default Signup;
