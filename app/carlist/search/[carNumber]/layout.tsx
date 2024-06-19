export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      dir="rtl"
      className="flex min-h-screen flex-col items-center justify-between md:p-24 p-5"
    >
      <div className="w-full md:max-w-3xl max-w-full">
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </div>
    </main>
  );
}
