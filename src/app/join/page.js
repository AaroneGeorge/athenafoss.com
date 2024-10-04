import ApplyButton from "../common/ApplyButton/ApplyButton";

export default function Join() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* <ApplyButton 
        redirectUrl="https://www.google.com" 
        newTab={true} 
      /> */}
      <a
        className="bg-gray-800 px-5 py-2.5 rounded-md text-sm hover:bg-black/80 transition-all ease-in"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now
      </a>
    </div>
  );
}
