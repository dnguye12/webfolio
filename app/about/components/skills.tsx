import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Skills = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-4xl lg:text-2xl font-semibold  text-center">💪 Skills</h2>
                </div>
                <div className="col-span-1 lg:col-span-3 px-8 lg:px-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px] sm:w-[250px]">Categories</TableHead>
                                <TableHead>Technologies</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-semibold text- sm:text-base">Front-end</TableCell>
                                <TableCell className="text-sm sm:text-base">React | NextJS | Tailwind | Bootstrap</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold text-sm sm:text-base">Back-end</TableCell>
                                <TableCell className="text-sm sm:text-base">NodeJS | ExpressJS | NextJS</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold text-sm sm:text-base">Databases</TableCell>
                                <TableCell className="text-sm sm:text-base">MongoDB | Convex | Prisma | MySQL</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold text-sm sm:text-base">Creative tools</TableCell>
                                <TableCell className="text-sm sm:text-base">Figma | Premiere Pro | Photoshop | After Effects</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold text-sm sm:text-base">General programming</TableCell>
                                <TableCell className="text-sm sm:text-base">Java | C++ | Python</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-semibold text-sm sm:text-base">English proficiency</TableCell>
                                <TableCell className="text-sm sm:text-base">C1+ 180/180 Linguaskill Cambridge</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </div>
            </div>
        </section>
    );
}

export default Skills;