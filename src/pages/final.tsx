import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import {useEffect} from "react";

export default function Final() {
  const selectedFrameMaterial = useSelector((state) => state.selectedItems.frameMaterial);
  const selectedGlassType = useSelector((state) => state.selectedItems.glassType);
  const selectedFrameColor = useSelector((state) => state.selectedItems.frameColor);
  let router= useRouter()

  useEffect(() => {
    if (!selectedFrameColor || !selectedGlassType || !selectedFrameMaterial) {
      router.push('/');
    }
  }, []);

  return (
    <div className="min-h-screen text-black bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-5/6 bg-white p-8 rounded shadow-lg">
        <h4 className="text-2xl font-bold mb-4">You have selected the following</h4>
        <ul>
          <li>Frame material: {selectedFrameMaterial}</li>
          <li>Glass type: {selectedGlassType}</li>
          <li>Frame color: {selectedFrameColor}</li>
        </ul>
      </div>
    </div>
  )
}
