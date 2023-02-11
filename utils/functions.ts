import moment from 'moment';
import {DateRangeType, LayoutPropsInterface} from './interface';
import {LoginRoute} from "../layout/route";
const CryptoJS = require('crypto-js');
const SHA256 = require('crypto-js/sha256');

export const JWT_TOKEN = 'sonicx-jwt';
export const UUID_TOKEN = 'sonicx-uuid';
export const CURRENT_BRAND = 'sonicx-brand';

export function redirectLogin(brand: string): void {
  window.location.href = `/${brand}${LoginRoute.path}`;
}

export function setCurrentBrand(brand: string): void {
  sessionStorage.setItem(CURRENT_BRAND, brand);
}

export function getCurrentBrand(): string {
  return sessionStorage.getItem(CURRENT_BRAND) ?? '';
}

// Clean session data & redirect to login page
export function cleanStore(): void {
  sessionStorage.clear();
}

export function isAuthenticated(): boolean {
  return getJWT() !== '';
}

export function getJWT(): string {
  return sessionStorage.getItem(JWT_TOKEN) ?? '';
}

export function setJWT(jwt: string): void {
  sessionStorage.setItem(JWT_TOKEN, jwt);
}

export function hmac(content: string): string {
  const hmacKey = process.env.NEXT_PUBLIC_HMAC_KEY;
  const hash = CryptoJS.HmacSHA256(content, hmacKey);
  return hash.toString(CryptoJS.enc.Hex);
}

export function sha256(content: string): string {
  return SHA256(content);
}

export async function getUUID(): Promise<string> {
  let UUID = localStorage.getItem(UUID_TOKEN);
  if (UUID) {
    return UUID;
  }

  const devices = await getMediaDevices();
  const browser = {
    agent: navigator.userAgent,
    vendor: navigator.vendor,
    language: navigator.language,
    devices: devices
  };

  UUID = hmac(JSON.stringify(browser));
  localStorage.setItem(UUID_TOKEN, UUID);
  return UUID;
}

async function getMediaDevices(): Promise<string> {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    // eslint-disable-next-line no-console
    console.log("enumerateDevices() not supported.");
    return '';
  }

  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.map(device => device.kind + ':' + device.deviceId).join('#');
}

export function buildLayoutBackground(props: LayoutPropsInterface): any {
  const bg = {};
  if (props.bgImage) {
    Object.assign(bg, {
      backgroundImage: `url("${props.bgImage}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      backgroundSize: 'contain',
    });
  }
  if (props.bgColor) {
    Object.assign(bg, {
      backgroundColor: props.bgColor,
    });
  }

  return bg;
}

export function formatDateTime(time: number): string {
  return moment.utc(time * 1000).format("DD/MM/YYYY HH:mm:ss");
}

export function formatCryptoCurrency(
    value: number,
    symbol = "USDT",
    decimal = 2
): string {
  const negativeSign = value < 0 ? "-" : "";
  const formatted = Intl.NumberFormat('en-US', {maximumFractionDigits: decimal}).format(value);
  return (
      negativeSign + symbol + formatted
  );
}

export function formatCurrency(value: number, currency = 'USD', short = false) {
  let isShorted = false;
  if (short && value > 1000) {
    value = value / 1000;
    isShorted = true;
  }
  let formatted = Intl.NumberFormat('en-US', {style: 'currency', currency: currency}).format(value);
  if (isShorted) {
    formatted = formatted + 'k';
  }
  return formatted;
}


export const getBrandPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/brands/all');
  const brands = await res.json();

  const paths = brands.map(brand => ({
    params: {brand: brand},
  }));

  return {paths, fallback: false};
}


export function getTimeRange(range: DateRangeType): any {
  let beginRange = moment();
  let endRange = moment()
  switch (range) {
    case 'currentMonth':
      beginRange = moment().startOf('month');
      break;
    case 'lastMonth':
      beginRange = moment().subtract(1, 'months').startOf('month');
      endRange = moment().subtract(1, 'months').endOf('month');
      break;
    case 'currentWeek':
      beginRange = moment().startOf('isoWeek');
      break;
    case 'lastWeek':
      beginRange = moment().subtract(1, 'weeks').startOf('isoWeek');
      endRange = moment().subtract(1, 'weeks').endOf('isoWeek');
      break;
  }
  return {
    start: beginRange.utc().valueOf(),
    end: endRange.utc().valueOf(),
  };
}

export function getStartOfMonth(): Date {
  return new Date(moment().startOf('month').toISOString());
}

export function getStartTimeOfMonth(): number {
  const startOfMonth = moment().utc().startOf('month');
  return moment.utc(startOfMonth.format('YYYY-MM-DD') + " 00:00:00", 'YYYY-MM-DD hh:mm:ss').unix();
}
