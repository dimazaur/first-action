/**
 * Sample action "sleep"
 * - to demonstrate an async-await delay
 * - remove if not needed
 * 
 * Returns the input after a delay as specified by the property "delayTime" in the input
 */
import delay from "./delay";

interface ActionInput {
  delayTime: number;
}

export const handler = async (input: string): Promise<ActionInput> => {
  // Add business logic here
  const inputAsJson: ActionInput = JSON.parse(input);

  await delay(inputAsJson.delayTime);

  return inputAsJson;
};
