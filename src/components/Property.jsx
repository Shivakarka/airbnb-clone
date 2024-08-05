import { Box, Typography } from "@mui/material";

const Property = () => {
  return (
    <Box className="flex flex-col  w-fit gap-3 mb-3 mt-5 pe-2 mx-auto ">
      <img
        src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg?im_w=720&im_q=highq"
        alt="property"
        className="rounded-xl h-[270px] w-[280px] object-cover cursor-pointer"
      />
      <Box>
        <Typography variant="body1" className={"cursor-pointer"}> Go VIP with Kevin Hart</Typography>
        <Typography variant="body2" className="text-gray-500">
          {" "}
          Hosted by Kevin Hart
        </Typography>
        <Typography variant="body1"> Coming 21 August</Typography>
      </Box>
    </Box>
  );
};

export default Property;
