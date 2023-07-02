import React, { useEffect, useState } from 'react';
import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Barcode() {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [data, setData] = useState<{
        text: string,
        type: string,
    }>({ text: '', type: '' });

    const handleLinkPress = async (url: string) => {      
        const canOpen = await Linking.canOpenURL(url);
      
        if (canOpen) {
          await Linking.openURL(url);
        } else {
          console.log(`Cannot open URL: ${url}`);
        }
      };

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return (
            <View>
                <Text>Barcode scanner app</Text>
                <Text>No access to camera</Text>
                <Button
                    title={'Allow Camera'}
                    onPress={() => {
                        (async () => {
                            const { status } = await BarCodeScanner.requestPermissionsAsync();
                            setHasPermission(status === 'granted');
                        })();
                    }}
                />
            </View>
        )
    }

    console.log('has permission', hasPermission);

    return (
        <View style={styles.container}>
            <View>
                <BarCodeScanner
                    onBarCodeScanned={(e) => {
                        setData({ text: e.data, type: e.type });
                    }}
                    style={{ height: 300, width: 300 }}
                />

                <Button
                    title={'Tap to Scan Again'}
                    onPress={() => {
                        setData({ text: '', type: '' });
                    }
                    }
                />

                <Text style={styles.dataTexts}>Barcode Type: {data?.type}</Text>
                <TouchableOpacity onPress={() => handleLinkPress(data?.text)}>
                    <Text style={styles.dataTexts}>Barcode Data: 
                    {data?.text}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 900,
        width: 500,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },

    dataTexts: {
        fontSize: 20,
        color: 'cyan',
        width: 300,
        backgroundColor: 'black',
    },
});