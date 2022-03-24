import { useParams } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
