import React from "react";
import ContentLoader, {Rect} from "react-content-loader";
import { useDimensions } from "@chakra-ui/react";

const CardSkeleton = () => {
    const { width } = useDimensions();
    const cardWidth = width > 768 ? "100%" : "100%";
    const cardHeight = width > 768 ? "100%" : "100%";
    return (
        <ContentLoader
        height={cardHeight}
        width={cardWidth}
        speed={2}
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        >
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
            <Rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
    )
}