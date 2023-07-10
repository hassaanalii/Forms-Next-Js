import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();
  const { query } = router;

  const name = query.name || '';
  const email = query.email || '';
  const country = query.country || '';
  const terms = query.terms === 'true'; // Convert string to boolean

  return (
    <main className='h-screen flex items-center justify-center'>
        <div className='p-20 flex-1 bg-white rounded-lg w-1/2'>
        <h1>Thanks for the Subscription {name} </h1>
        </div>

    </main>


   

  );
};

export default SuccessPage;
