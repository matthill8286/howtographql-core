import { prismaObjectType, queryField, idArg, intArg } from "yoga";
import { getUserTutorial } from "./UserTutorial";

export const Tutorial = prismaObjectType({
    name: 'Tutorial',
    definition(t) {
        // If you wish you customize/hide fields, call `t.prismaFields(['id', ...])`  with the desired field names
        // If you wish to add custom fields on top of prisma's ones, use t.field/string/int...
        t.prismaFields(['*'])
        t.int("numberOfStudents", {
            resolve: async (parent, args, ctx) => {
                return (await ctx.prisma.userTutorialsConnection({
                    where: {
                        tutorial: {
                            id: parent.id
                        },
                        currentChapter_gt: 0
                    }
                }).aggregate()).count
            }
        });
        t.int("upvotes", {
            resolve: async (parent, args, ctx) => {
                return (await ctx.prisma.userTutorialsConnection({
                    where: {
                        tutorial: {
                            id: parent.id
                        },
                        upvoted: true
                    }
                }).aggregate()).count
            }
        });
        t.field("viewerUserTutorial", {
            type: "UserTutorial",
            description: "The UserTutorial for the current user associated with this Tutorial.",
            nullable: true,
            resolve: async (parent, args, ctx) => {
                return await getUserTutorial({
                    tutorialId: parent.id,
                    userId: ctx.currentUserId
                }, ctx)
            }
        })
    },
})

export const tutorial = queryField("tutorial", {
    type: "Tutorial",
    args: {
        id: idArg({
            required: true
        })
    },
    resolve: (_, args, ctx) => {
        return ctx.prisma.tutorial({
            id: args.id
        })
    }
})
export const tutorials = queryField("tutorials", {
    type: "Tutorial",
    list: true,
    args: {
        first: intArg()
    },
    resolve: (_, args, ctx) => {
        return ctx.prisma.tutorials({
            first: args.first
        })
    }
})