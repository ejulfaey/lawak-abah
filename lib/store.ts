import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';
import { generateGuestUserId } from "./utils";

export const atomLoading = atom<boolean>(false);
export const atomSwiperLabel = atom<boolean>(true);
export const atomGuestId = atomWithStorage('uuid', generateGuestUserId());