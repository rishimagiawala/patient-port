import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function BreadCrumbLinkDeterminer({ name }) {
  switch (name) {
    case "Dashboard":
      return "/dashboard";
    case "Pending Requests":
      return "/dashboard/pending";
    default:
      return "/";
  }
}

function Breadcrumbs({ links }) {
  return (
    <Box pl={4}>
      <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
        {links.map((link) => (
          <BreadcrumbItem key={link}>
            <BreadcrumbLink as={Link} to={BreadCrumbLinkDeterminer(link)}>
              {link}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
}

export default Breadcrumbs;
