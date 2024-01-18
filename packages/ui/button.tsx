"use client";

export function Button(): JSX.Element {
  return (
    <button
      // eslint-disable-next-line no-alert
      onClick={(): void => alert("booped")}
      type="button"
      style={{ background: "green" }}
    >
      Boop
    </button>
  );
}
