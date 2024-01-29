import { Slide } from '@mui/material'
import theme from "@/styles/theme"
import { ImageTransitionGrid, ImageElevated, ImageTransitionPhotoBox, ImageTransitionTypographyGrid, ImageTransitionTypography } from './photoTransitionTile.styles'

export default function PhotoTransitionTile({imageName, width, height, altText, imageText, rowDirection, slideDirection}) {
    return (
        <ImageTransitionGrid container direction={rowDirection}>
            <ImageTransitionPhotoBox item sm={12} md={6}>
                <Slide direction={slideDirection} in={true} mountOnEnter unmountOnExit timeout={1500}>
                    <ImageElevated
                        src={imageName}
                        width={width}
                        height={height}
                        alt={altText}
                    />
                </Slide>
            </ImageTransitionPhotoBox>
            <ImageTransitionTypographyGrid item sm={12} md={6}>
                <ImageTransitionTypography>
                    {imageText}
                </ImageTransitionTypography>
            </ImageTransitionTypographyGrid>
        </ImageTransitionGrid>
    )
}