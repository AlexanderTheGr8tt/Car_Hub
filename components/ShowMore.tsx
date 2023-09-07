"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, { scroll: false });
  };

  const handleShowLess = () => {
    // Calculate a new "limit" value for showing fewer items (e.g., reduce the limit by 10)
    const newLimit = Math.max((pageNumber - 1) * 10, 10); // Ensure the limit is not below 10

    // Update the query parameter with the new "limit" value
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    // Perform the navigation
    router.push(newPathName, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <>
          <CustomButton
            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleShowMore}
          />
          <CustomButton
            title="Show Less"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleShowLess}
          />
        </>
      )}
    </div>
  );
};

export default ShowMore;
