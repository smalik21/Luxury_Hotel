
import BookingSummary from '@/components/checkouts/BookingSummary';
import Confirmation from '@/components/checkouts/Confirmation';
import PaymentDetails from '@/components/checkouts/PaymentDetails';
import PersonalInfo from '@/components/checkouts/PersonalInfo';

const Checkout = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
      <form className="space-y-6">
        <BookingSummary/>
        <PersonalInfo/>
        <PaymentDetails/>
       <Confirmation/>
      </form>
    </div>
  );
};

export default Checkout;
