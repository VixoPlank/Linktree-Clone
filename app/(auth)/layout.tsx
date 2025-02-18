export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
        {children}
      </div>
      <div className='bg-violet-400 hidden md:block w-full h-full' />
    </div>
  );
}
