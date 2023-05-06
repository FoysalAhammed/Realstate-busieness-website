
import { baseUrl, fetchApi } from "@/utils/fetchApi"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import Property from "../components/Property"
const Banner = ({purpose,imgUrl,title1,title2,desc1,desc2,buttonText,linkName})=> (
   <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imgUrl} width={500} height={300} alt="banner" priority={true}
/>
    <Box p="4">
     <Text color="gray.500" fontSize="sm" fontWeight="medium" > {purpose}</Text>
     <Text fontSize="3xl" fontWeight="bold" > {title1} <br/> {title2}</Text>
     <Text fontSize="lg"  paddingTop="3" paddingBottom="3" color="gray.700" fontWeight="medium" > {desc1} <br/> {desc2}</Text>
     <Button bg="gray.500" color="white" fontSize="xl"  > 
     <Link href={linkName}> {buttonText}</Link>
     
     </Button>
    </Box>
   </Flex>
)
export default function Home({propertiesForRent,propertiesForSale}) {
  console.log(propertiesForSale,propertiesForRent);
  return (
    <Box>

      <Banner purpose="Rent A Home"
      title1="Rent A Home"
      title2="Rental A Homes for"
      desc1="Explore Appartments,villas,Homes"
      desc2="and more information"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
     {/* fetch the properties and map over them here */}

     {propertiesForRent?.map((property) =>(
      <Property property={property}  key={property.id}/>
     ))}
      </Flex>
      <Banner  purpose="Buy A Home"
      title1="Find buy Own Home"
      title2="Drem Your Home"
      desc1="Explore Appartments,villas,Homes"
      desc2="and more information"
      buttonText="Explore Renting"
      linkName="/search?purpose=for-rent"
      imgUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"/>
      <Flex flexWrap="wrap">
      {propertiesForSale?.map((property) =>( <Property property={property}  key={property.id}/> ))}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
