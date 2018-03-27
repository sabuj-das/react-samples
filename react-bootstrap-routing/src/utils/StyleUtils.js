import React from 'react';

class StyleUtils {

    static convertBreactToStyle(type) {
        if(type){
            switch (type) {
                case "BREACH_UNKNOWN" :
                    return "BREACH DEFAULT";
                case "BREACH_INFO" :
                    return "BREACH INFO";
                case "BREACH_ACCEPTABLE" :
                    return "BREACH SUCCESS";
                case "BREACH_WARNING" :
                    return "BREACH WARN";
                case "BREACH_FATAL" :
                    return "BREACH ERROR";
            }
        }
        return "default";
    }

    static breachLevel(type) {
        if (type) {
            switch (type) {
                case "BREACH_UNKNOWN" :
                    return -1;
                case "BREACH_ACCEPTABLE" :
                    return 0;
                case "BREACH_WARNING" :
                    return 1;
                case "BREACH_FATAL" :
                    return 2;
            }
        }
        return -1;
    }

}

export default StyleUtils;

