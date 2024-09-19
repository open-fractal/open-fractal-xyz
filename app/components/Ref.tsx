function AIChatHistory() {
  // ... existing code ...

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <a
        href="https://flur.gg/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover-scale"
      >
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </a>
      // ... rest of the component
    </div>
  );
}