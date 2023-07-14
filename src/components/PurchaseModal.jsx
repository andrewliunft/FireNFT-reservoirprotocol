import { usePaperSdkContext } from "@contexts/paperSdkContext";
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";
import StyledModal from "@ui/StyledModal";

const PurchaseModal = () => {
  const { isPurchaseModalOpen, closePurchaseModal, sdkClientSecret } = usePaperSdkContext();

  if (isPurchaseModalOpen) {
    return (
      <StyledModal open={isPurchaseModalOpen} onClose={closePurchaseModal}>
        <CheckoutWithCard
          sdkClientSecret={sdkClientSecret}
          onPaymentSuccess={(result) => {
            console.log("Payment successful.", result);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPriceUpdate={(price) => {
            console.log(price);
          }}
          locale="ko"
          options={{
            colorBackground: '#fefae0',
            colorPrimary: '#ececec',
            colorText: '#f9f9f9',
            borderRadius: 6,
            inputBackgroundColor: '#ececec',
            inputBorderColor: '#331c1c',
          }}
        />
      </StyledModal >
    )
  } else {
    return null;
  }
}

export default PurchaseModal;