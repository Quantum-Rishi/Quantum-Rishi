// General helper functions for the Quantum Rishi project
export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
