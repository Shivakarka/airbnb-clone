import {Box} from "@mui/system";
import {Typography} from "@mui/material";

const Footer = () => {
  return (
      <footer className={"flex flex-col  w-[50%] mx-auto text-[14px]"}>
          <hr className={"mt-8"}/>
          <Box className={"flex flex-col md:flex-row mt-10 gap-[15%]"}>
              <Box className={"flex flex-col gap-3 "}>
                  <Typography variant={"h3"} sx={{fontSize : "14px"}}>Support</Typography>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Help Centre</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>AirCover</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Anti-discrimination</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Disability support</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Cancellation options</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Report neighbourhood concern</li></a>
              </Box>
              <Box className={"flex flex-col gap-3 mt-5 md:mt-0"}>
                  <Typography variant={"h3"} sx={{fontSize : "14px"}}>Hosting</Typography>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Airbnb your home</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>AirCover for Hosts</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Hosting resources</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Community forum</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Hosting responsibly</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Join a free Hosting class</li></a>
              </Box>
              <Box className={"flex flex-col gap-3 mt-5 md:mt-0"}>
                  <Typography variant={"h3"} sx={{fontSize : "14px"}}>Airbnb</Typography>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Newsroom</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>New features</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Careers</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Investors</li></a>
                  <a href={"#"}><li className={"list-none text-gray-500"}>Airbnb.org emergency stays</li></a>
              </Box>
          </Box>
          <hr className={"mt-5"}/>
          <Box className={"mt-5 flex flex-col md:flex-row items-center gap-3"}>
                <Typography variant={"h3"} sx={{fontSize : "14px"}}>© {new Date().getFullYear()} Airbnb, Inc.</Typography>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Privacy</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Terms</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Sitemap</li></a>
                    <a href={"#"}><li className={"list-none text-gray-500"}>Company details</li></a>
          </Box>
      </footer>
  );
}

export default Footer;