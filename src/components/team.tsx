import { useTranslations } from 'next-intl';
import Image from 'next/image';

const professors = [
    {
        nameKey: 'hekmatzadeh',
        roleKey: 'referee',
        avatar: '/img/team-Professors/dr-hekmatzade.png',
    },
    {
        nameKey: 'baghlani',
        roleKey: 'supervisor',
        avatar: '/img/team-Professors/dr-baghlani.png',
    },
    {
        nameKey: 'daneshvar',
        roleKey: 'advisor',
        avatar: '/img/team-Professors/dr-daneshvar.jpg',
    }

]

const colleagues = [
    {
        nameKey: 'amirrezaFoshati',
        roleKey: 'thesisAuthor',
        avatar: '/img/team-colleagues/AMIRREZA FOSHATI.png',
    },
    {
        nameKey: 'amirhosseinFoshati',
        roleKey: 'labAssistant',
        avatar: '/img/team-colleagues/AmirHossein-Foshati.png',
    },
    {
        nameKey: 'aliSehat',
        roleKey: 'labConsultant',
        avatar: null,
        color: 'bg-purple-500',
    },
    {
        nameKey: 'mehdiAhmadi',
        roleKey: 'equipmentConsultant',
        avatar: null,
        color: 'bg-orange-500',
    },
]

export default function TeamSection() {
    const t = useTranslations('Team');
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">

                <div>
                    <h3 className="mb-6 text-lg font-medium">{t('professors')}</h3>
                    <div className="grid grid-cols-1 gap-4 border-t py-6 md:grid-cols-3">
                        {professors.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <Image className="aspect-square rounded-full object-cover" src={member.avatar} alt={t(`names.${member.nameKey}`)} height={460} width={460} />
                                </div>
                                <span className="mt-2 block text-sm">{t(`names.${member.nameKey}`)}</span>
                                <span className="text-muted-foreground block text-xs whitespace-pre-line">{t(member.roleKey)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">{t('researchers')}</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {colleagues.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    {member.avatar ? (
                                        <Image className="aspect-square rounded-full object-cover" src={member.avatar} alt={t(`names.${member.nameKey}`)} height={460} width={460} />
                                    ) : (
                                        <div className={`aspect-square rounded-full ${member.color}`}>
                                        </div>
                                    )}
                                </div>
                                <span className="mt-2 block text-sm">{t(`names.${member.nameKey}`)}</span>
                                <span className="text-muted-foreground block text-xs whitespace-pre-line">{t(member.roleKey)}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}