import { Request, Response } from "express";
import { PlrPosition, GlobalPositions, ReqPositionBody } from "@/types/plrPositions.types";
import { POSITION_TOKEN } from "@/config/env";

export const globalPositions: GlobalPositions = {};

export const setPositions = async (
    req: Request,
    res: Response
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${POSITION_TOKEN}`) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const { serverId, players } = req.body as ReqPositionBody;
    if (!serverId || !Array.isArray(players)) {
        return res.status(400).json({
            message: "Missing or invalid data"
        });
    }

    /* 
    TODO: 
    - Players array validation, might cause slight delays but whatever...
    - We can optimize later when Roblox enables websocket support for live experiences
    */

    globalPositions[serverId] = players;
    res.status(200).json({
        message: `Successfully updated global positions for server ${serverId}`
    });

    console.log(globalPositions);
};

export const getPositions = async (
    req: Request,
    res: Response
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${POSITION_TOKEN}`) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    // TODO: return statement needs meta data for better frontend handling
    res.status(200).json(globalPositions);
};
