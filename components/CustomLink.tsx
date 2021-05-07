import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

type LinkProps = {
  children: any;
  href: any;
  locale?: any;
  prefetch?: any;
};

const CustomLink: FC<LinkProps> = ({
  children,
  href,
  locale,
  prefetch,
  ...rest
}) => {
  return (
    <NextLink passHref href={href} locale={locale} prefetch={prefetch}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  );
};

export default CustomLink;
