import { useOutletContext } from "react-router-dom";

export default function Price() {
  const { isLoading, thisIdol } = useOutletContext<{ isLoading: boolean, thisIdol: any }>();
  console.log(thisIdol)
  console.log(isLoading)
  return <div>{thisIdol.targetDonation} , {thisIdol.receivedDonations}    </div>;
}
