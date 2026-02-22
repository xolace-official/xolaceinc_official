import {HomePage} from "@/components/pages/home/HomePage";
import logger from "@/lib/logger";

export default function Home() {
  logger.info("HomePage rendered", { route: "/" });

  return (
   <HomePage />
  );
}
