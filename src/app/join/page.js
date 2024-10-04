import ApplyButton from "../common/ApplyButton/ApplyButton";

export default function Join() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <ApplyButton 
        redirectUrl="https://www.google.com" 
        newTab={true} 
      />
    </div>
  );
}
