import axios, { AxiosPromise } from 'axios';
import { URL_INSANE_API_URL } from '@/services/config';
import { TypoOptionsResponseBody, TypoRequestBody } from '@/services/url-insane/types';


export default {
  fetchOptions: async () => {
    const data = await Promise.resolve(mockOptions);
    // const { data } = await axios.request<AxiosPromise<TypoOptionsResponseBody>>({
    //   url: URL_INSANE_API_URL,
    //   method: 'options',
    // });

    return data;
  },
  fetchResult: async (payload: TypoRequestBody) => {
    const { data } = await axios.post(URL_INSANE_API_URL, payload);

    return data;
  },
};


const mockOptions = {
  "domain": {
      "type": "input",
      "description": "The domain",
      "optional": false
  },
  "funcs": {
      "type": "multi-select",
      "description": "Extra functions for data or filtering (default [idna])",
      "optional": true,
      "values": [
          {
              "value": "MX",
              "name": "MX Lookup",
              "description": "Checking for DNS's MX records"
          },
          {
              "value": "IP",
              "name": "IP Lookup",
              "description": "Checking for IP address"
          },
          {
              "value": "IDNA",
              "name": "IDNA Domain",
              "description": "Show international domain name"
          },
          {
              "value": "TXT",
              "name": "TXT Lookup",
              "description": "Checking for DNS's TXT records"
          },
          {
              "value": "NS",
              "name": "NS Lookup",
              "description": "Checks DNS NS records"
          },
          {
              "value": "CNAME",
              "name": "CNAME Lookup",
              "description": "Checks DNS CNAME records"
          },
          {
              "value": "SIM",
              "name": "Domain Similarity",
              "description": "Show domain content similarity"
          },
          {
              "value": "LIVE",
              "name": "Online domians",
              "description": "Show domains with ip addresses only"
          },
          {
              "value": "301",
              "name": "Redirected Domain",
              "description": "Show domains redirects"
          },
          {
              "value": "GEO",
              "name": "GeoIP Lookup",
              "description": "Show country location of ip address"
          }
      ]
  },
  "keyboards": {
      "type": "multi-select",
      "description": "Keyboards/layouts ID to use (default [en1])",
      "optional": true,
      "values": [
          {
              "value": "AR1",
              "name": "غفقثصض",
              "description": "Arabic keyboard layout"
          },
          {
              "value": "AR2",
              "name": "AZERTY PC",
              "description": "Arabic PC keyboard layout"
          },
          {
              "value": "AR3",
              "name": "North Africa",
              "description": "Arabic North african keyboard layout"
          },
          {
              "value": "AR4",
              "name": "QWERTY",
              "description": "Arabic keyboard layout"
          },
          {
              "value": "HY1",
              "name": "HM QWERTY",
              "description": "Armenian QWERTY keyboard layout"
          },
          {
              "value": "HY2",
              "name": "Armenian, Western QWERTY",
              "description": "Armenian, Western QWERTY keyboard layout"
          },
          {
              "value": "EN1",
              "name": "QWERTY",
              "description": "English QWERTY keyboard layout"
          },
          {
              "value": "EN2",
              "name": "AZERTY",
              "description": "English AZERTY keyboard layout"
          },
          {
              "value": "EN3",
              "name": "QWERTZ",
              "description": "English QWERTZ keyboard layout"
          },
          {
              "value": "EN4",
              "name": "DVORAK",
              "description": "English DVORAK keyboard layout"
          },
          {
              "value": "FI1",
              "name": "QWERTY",
              "description": "Finnish QWERTY keybaord layout"
          },
          {
              "value": "FR1",
              "name": "French Canadian CSA",
              "description": "French Canadian CSA keyboard layout"
          },
          {
              "value": "IW1",
              "name": "Hebrew",
              "description": "Hebrew standard layout"
          },
          {
              "value": "FA1",
              "name": "Persian",
              "description": "Persian standard layout"
          },
          {
              "value": "RU1",
              "name": "ЙЦУКЕН",
              "description": "Russian keyboard layout"
          },
          {
              "value": "RU2",
              "name": "ЯШЕРТЫ",
              "description": "Phonetic Russian keybaord layout"
          },
          {
              "value": "RU3",
              "name": "ЙЦУКЕН",
              "description": "PC Russian keyboard layout"
          },
          {
              "value": "ES1",
              "name": "QWERTY",
              "description": "Spanish keyboard layout"
          },
          {
              "value": "ES2",
              "name": "QWERTY",
              "description": "Spanish ISO keyboard layout"
          }
      ]
  },
  "typos": {
      "type": "multi-select",
      "description": "The domain",
      "optional": true,
      "values": [
          {
              "value": "MD",
              "name": "Missing Dot",
              "description": "Missing Dot is created by omitting a dot from the domain."
          },
          {
              "value": "MDS",
              "name": "Missing Dashes",
              "description": "Missing Dashes is created by stripping all dashes from the domain."
          },
          {
              "value": "CO",
              "name": "Character Omission",
              "description": "Character Omission Omitting a character from the domain."
          },
          {
              "value": "CS",
              "name": "Character Swap",
              "description": "Character Swap Swapping two consecutive characters in a domain"
          },
          {
              "value": "ACS",
              "name": "Adjacent Character Substitution",
              "description": "Adjacent Character Substitution replaces adjacent characters"
          },
          {
              "value": "ACI",
              "name": "Adjacent Character Insertion",
              "description": "Adjacent Character Insertion inserts adjacent character "
          },
          {
              "value": "CR",
              "name": "Character Repeat",
              "description": "Character Repeat Repeats a character of the domain name twice"
          },
          {
              "value": "DCR",
              "name": "Double Character Replacement",
              "description": "Double Character Replacement repeats a character twice."
          },
          {
              "value": "SD",
              "name": "Strip Dashes",
              "description": "Strip Dashes is created by omitting a dash from the domain"
          },
          {
              "value": "SP",
              "name": "Singular Pluralise",
              "description": "Singular Pluralise creates a singular domain plural and vice versa"
          },
          {
              "value": "CM",
              "name": "Common Misspellings",
              "description": "Common Misspellings are created from a dictionary of commonly misspelled words"
          },
          {
              "value": "VS",
              "name": "Vowel Swapping",
              "description": "Vowel Swapping is created by swaps vowels"
          },
          {
              "value": "HG",
              "name": "Homoglyphs",
              "description": "Homoglyphs replaces characters with characters that look similar"
          },
          {
              "value": "WTLD",
              "name": "Wrong TLD",
              "description": "Wrong Top Level Domain"
          },
          {
              "value": "W2TLD",
              "name": "Wrong 2nd TLD",
              "description": "Wrong Second Level Domain"
          },
          {
              "value": "W3TLD",
              "name": "Wrong 3rd TLD",
              "description": "Wrong Third Level Domain"
          },
          {
              "value": "HP",
              "name": "Homophones",
              "description": "Homophones Typos are created from sets of words that sound the same"
          },
          {
              "value": "BF",
              "name": "Bit Flipping",
              "description": "Bitsquatting relies on random bit-errors to redirect connections"
          },
          {
              "value": "NS",
              "name": "Numeral Swap",
              "description": "Numeral Swap numbers, words and vice versa"
          }
      ]
  }
}