import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Heading,
  Flex,
  Collapse,
  useDisclosure,
  IconButton,
  Spacer,
  Text,
  Divider,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import * as React from 'react';

interface HeaderProps {
  siteTitle: string;
}

function Header({ siteTitle = '' }: HeaderProps) {
  const { isOpen, onToggle } = useDisclosure();
  const forceOpen = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      as="header"
      bg="red.300"
      p={2}
      direction={['column', null, 'row']}
      position="absolute"
      top={0}
      w="100%"
    >
      <Flex>
        <Heading style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <Spacer />
        <IconButton
          aria-label={`${isOpen ? 'close' : 'open'} navigation menu`}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={12} />}
          visibility={['visible', null, 'hidden']}
        />
      </Flex>
      <Collapse in={isOpen || forceOpen}>
        <Stack align="start" direction={['column', null, 'row']}>
          {[0, 1, 2].map((i) => (
            <Flex direction="column" w="100%">
              <Text>{`Page ${i}`}</Text>
              {!forceOpen && <Divider />}
            </Flex>
          ))}
        </Stack>
      </Collapse>
    </Flex>
  );
}

export default Header;
