export async function importOrThrow<T>(modulePath: string): Promise<T> {
  try {
    return (await import(modulePath)).default;
  } catch (error) {
    throw new Error(`Failed to import optional module '${modulePath}', make sure its installed and try again`, { cause: error });
  }
}
