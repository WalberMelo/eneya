import React from "react";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { cardListData } from "@components/Card/data/cardListData";

export default function CardList() {
    return (
        <CardGroup className="wrap wrap-px">
            {cardListData.map((data, index) => (
                <Card
                    key={index}
                    className="  bg-white-600/20 card h-full"
                    type="bordered"
                >
                    <CardHeader>{data.title}</CardHeader>
                    <CardHeader>
                        {data.subtitle && (
                            <p className="text-sm mt-1">{data.subtitle}</p>
                        )}
                    </CardHeader>
                    <CardBody className="flex-grow card--body w-full py-2">
                        <ul className="space-y-2">
                            {data.items.map((item, itemIndex) => (
                                <li
                                    key={itemIndex}
                                    className="flex items-start space-x-2"
                                >
                                    <span className="w-5 h-5 text-secondary-300 flex-shrink-0 mt-0.5">
                                        &#10003;
                                    </span>
                                    <span className="text-sm text-primary-900">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            ))}
        </CardGroup>
    );
}
