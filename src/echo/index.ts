/**
 * Sample action "echo" - remove/reuse if not required
 *
 * The following interfaces would match with your input/output schema as set on the DevFlows UI
 */
interface ActionInput {};

interface ActionOutput {};

export const handler = async (
  input: string
): Promise<ActionOutput> => {
  // Add business logic here
  const inputAsJson: ActionInput = JSON.parse(input);

  return inputAsJson;
};
