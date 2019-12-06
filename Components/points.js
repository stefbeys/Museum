import React from "react";
import {View, Text, Image} from 'react-native';
import CameraCompanion from './cameraCompanion'
import CONSTANT_STRINGS from "../assets/fi/strings";
import images from "./images";
import styles from './stylesheet';

export default class Points extends React.Component {
  render() {
        return(
            <View>
                <CameraCompanion scanText={CONSTANT_STRINGS.ANIMAL_SCANNED} />
                <View style={styles.c_container}>
                    <View  style={styles.c_companionPoints_container}>
                        <View style={styles.c_companionPoints_overall_container}>
                            <Text style={styles.c_companionPoints_1}>{CONSTANT_STRINGS.SCANNING_REWARD}</Text>
                            <Image style={styles.c_point_image}  source={images.points} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

