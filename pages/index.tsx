import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const yellow = "#FACC15"
const dark = "#160C28"

const mentors = [
  {
    id: "1",
    name: "Hong Anh",
    img: "niji.jpg",
    currentTitle: "Corporate Communications Manager",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus tempor augue, vitae porttitor quam lobortis eget. Morbi egestas lacinia finibus.",
    areas: "Marketing, PR",
    bookingUrl: "https://calendly.com/thuyet/mentoring",
  },
  {
    id: "2",
    name: "Hoang Gia",
    img: "royal.jpg",
    currentTitle: "Senior Associate Consultant",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus tempor augue, vitae porttitor quam lobortis eget. Morbi egestas lacinia finibus.",
    areas: "Business Intelligence",
    bookingUrl: "https://calendly.com/thuyet/mentoring",
  },
  {
    id: "3",
    name: "Thuyet Nguyen",
    img: "thuyet.jpg",
    currentTitle: "IELTS instructor | Frontend Developer",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus tempor augue, vitae porttitor quam lobortis eget. Morbi egestas lacinia finibus.",
    areas: "Software development, Career change, Teaching",
    bookingUrl: "https://calendly.com/thuyet/mentoring",
  },
]
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Container maxW="full">
      {/* Nav */}
      <Heading m={10}>M=M</Heading>

      {/* Carousel */}
      <Container maxW="3xl">
        <Slider {...settings}>
          <Box>
            <Image w="100%" src="img/banner 1.jpg" />
          </Box>
          <Box>
            <Image w="100%" src="img/banner 2.jpg" />
          </Box>
        </Slider>
      </Container>
      {/* Options */}
      <Heading size="lg" m={10}>
        You want to become a ...
      </Heading>
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box w="100%" p={10}>
          <Link href="/MenteePage">
            <Text textAlign="center" m={5}>
              Mentee
            </Text>
            <Image
              opacity="0.8"
              w="100%"
              src="/img/mentee.jpg"
              borderRadius="24px"
              _hover={{ transform: "scale(1.05)", transition: "0.3s", opacity: "1" }}
              alt="mentee"
            />
          </Link>
        </Box>

        <Box w="100%" p={10}>
          <Link href="/MentorPage" textDecoration="none">
            <Text textAlign="center" m={5}>
              Mentor
            </Text>
            <Image
              opacity="0.8"
              w="100%"
              src="/img/mentor.jpg"
              borderRadius="24px"
              _hover={{ transform: "scale(1.05)", transition: "0.3s", opacity: "1" }}
              alt="mentor"
            />
          </Link>
        </Box>
      </Flex>
      {/* Latest Mentors */}
      <Heading size="lg" color={dark} m={10}>
        Latest mentors
      </Heading>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        m={10}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {mentors.map((m) => (
          <Box key={m.id} maxWidth={{ base: "100%", md: "30%" }} m={5}>
            <Card>
              <CardBody>
                <Image
                  src={`img/${m.img}`}
                  alt="mentor"
                  borderRadius="full"
                  boxSize="100%"
                  objectFit="cover"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{m.name}</Heading>
                  <Heading size="md">{m.currentTitle}</Heading>
                  <Text>
                    <Badge size="md" bg={yellow}>
                      {m.areas}
                    </Badge>
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus tempor
                    augue, vitae porttitor quam lobortis eget. Morbi egestas lacinia finibus. Duis
                    iaculis sodales nibh id viverra. Proin convallis elit ac libero dignissim,
                    suscipit ultricies libero feugiat. Vivamus ut condimentum magna, sed porta
                    ligula. Fusce pulvinar sagittis lectus id sodales.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    as={Link}
                    variant="solid"
                    colorScheme="yellow"
                    href={m.bookingUrl}
                    _hover={{ textDecoration: "none", bgColor: "yellow.300" }}
                    isExternal
                  >
                    Schedule a chat
                  </Button>
                  <Button variant="ghost">Learn more</Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        ))}
      </Flex>
      {/* Footer */}
    </Container>
  )
}
