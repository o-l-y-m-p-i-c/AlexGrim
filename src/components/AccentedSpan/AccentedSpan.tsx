export const AccentedSpan = ({ label }: { label: string }) => {
  return (
    <span
      style={{
        color: "var(--accent-color)",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
};
