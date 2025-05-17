import { TwitchPlayerProps } from '../../types/TwitchPlayerProps';

const TwitchPlayer = ({ channel, parent }: TwitchPlayerProps) => {
    return (
        <div className='w-full aspect-video overflow-hidden'>
            <iframe
                src={`https://player.twitch.tv/?channel=${channel}&parent=${parent}&autoplay=true&muted=true`}
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                className='w-full h-full rounded-xl shadow-lg'
                frameBorder='0'
                title={`Twitch player for ${channel}`}
            />
        </div>
    );
};

export default TwitchPlayer;