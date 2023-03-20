import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import { selectedItemsActions } from '@/store/selected-items-slice';
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";

const frameMaterialOptions = ['Wood', 'Aluminum', 'Vinyl', 'Fiberglass',]
const glassTypeOptions = ['Clear', 'Frosted', 'Tinted', 'Low-E',]
const frameColorOptions = ['White', 'Black', 'Bronze', 'Silver',]

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedItemsActions.resetSelections());
  }, [])

  const handleSelectFrameMaterial = (option: string) => {
    dispatch(selectedItemsActions.selectFrameMaterial(option));
  }

  const handleSelectGlassType = (option: string) => {
    dispatch(selectedItemsActions.selectGlassType(option));
  }

  const handleSelectFrameColor = (option: string) => {
    dispatch(selectedItemsActions.selectFrameColor(option));
  }

  const selectedFrameMaterial = useSelector((state) => state.selectedItems.frameMaterial);
  const selectedGlassType = useSelector((state) => state.selectedItems.glassType);
  const selectedFrameColor = useSelector((state) => state.selectedItems.frameColor);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-5/6 bg-white p-8 rounded shadow-lg">
        <h1 className="text-2xl text-black font-bold mb-4">Select a window material</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Dropdown
            options={frameMaterialOptions}
            selectedOption={selectedFrameMaterial}
            onSelectOption={handleSelectFrameMaterial}
            label="Frame Material"
          />
          <Dropdown
            options={glassTypeOptions}
            selectedOption={selectedGlassType}
            onSelectOption={handleSelectGlassType}
            label="Glass Type"
          />
          <Dropdown
            options={frameColorOptions}
            selectedOption={selectedFrameColor}
            onSelectOption={handleSelectFrameColor}
            label="Frame Color"
          />
        </div>
        <Link href="/final">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Next
          </button>
        </Link>
      </div>
    </div>
  )
}
