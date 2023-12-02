import { StyleSheet } from "react-native";

interface BodyStyleProps {
    xBody: number;
    yBody: number;
    widthBody: number;
    heightBody: number;
    color: string;
}

export const styles = ({ xBody, yBody, widthBody, heightBody, color }: BodyStyleProps) => StyleSheet.create({
    floor: {
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
        resizeMode: "contain",
        backgroundColor: color,
    }
});
