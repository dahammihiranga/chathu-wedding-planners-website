import type {
  InputHTMLAttributes,
  ReactNode,
} from "react";

type FormFieldProps = {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormField({
  label,
  name,
  error,
  required = false,
  children,
  className = "",
  ...inputProps
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4c423e]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#a87868]">*</span>
        )}
      </label>

      {children ?? (
        <input
          id={name}
          name={name}
          aria-invalid={Boolean(error)}
          aria-describedby={
            error ? `${name}-error` : undefined
          }
          className={`min-h-14 w-full border bg-transparent px-4 text-sm text-[#2f2927] outline-none transition placeholder:text-[#a89d97] focus:border-[#a87868] ${
            error
              ? "border-red-400"
              : "border-[#d9cbc4]"
          } ${className}`}
          {...inputProps}
        />
      )}

      {error && (
        <p
          id={`${name}-error`}
          className="mt-2 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}