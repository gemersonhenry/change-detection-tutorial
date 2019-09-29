import { BOOTSTRAP_GENERIC_TYPES_01 } from 'src/app/components/settings/enums';

export const ALERT_TYPES_ARRAY: BOOTSTRAP_GENERIC_TYPES_01[] = Object.keys(BOOTSTRAP_GENERIC_TYPES_01)
  .map(key => BOOTSTRAP_GENERIC_TYPES_01[key]);
