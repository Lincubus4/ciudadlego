// Service to handle communication with ESP32
// Currently simulates the connection

export const sendLightCommand = async (lightId, state) => {
    console.log(`[ESP32 Service] Sending command to Light ${lightId}:`, state);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // In the future, this will be:
    // return fetch(`http://esp32-ip/api/lights/${lightId}`, {
    //   method: 'POST',
    //   body: JSON.stringify(state)
    // });

    return { success: true };
};

export const sendGlobalCommand = async (command) => {
    console.log(`[ESP32 Service] Sending global command: ${command}`);
    return { success: true };
};
