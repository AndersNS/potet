import { actions } from 'astro:actions';
import { Button, Rating, Spinner, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { PotatIcon } from './Icon';

export function Potatoe({
  potatoId,
  name,
  andersInitialRating,
  linnInitialRating,
  infoLink,
  initialComment,
}: {
  potatoId: string;
  name: string;
  andersInitialRating: number;
  linnInitialRating: number;
  infoLink: string;
  initialComment: string;
}) {
  const [andersRatingRating, setAndersRatingRating] =
    useState(andersInitialRating);
  const [andersLoading, setAndersLoading] = useState(false);

  const [linnRating, setLinnRating] = useState(linnInitialRating);
  const [linnLoading, setLinnLoading] = useState(false);

  async function updateRating(current: number, person: 'anders' | 'linn') {
    if (person === 'anders') {
      setAndersLoading(true);
      const newRating = await actions.updateAndersRating({ potatoId, current });
      setAndersRatingRating(newRating.data!);
      setAndersLoading(false);
    }

    if (person === 'linn') {
      setLinnLoading(true);
      const newRating = await actions.updateLinnRating({ potatoId, current });
      setLinnRating(newRating.data!);
      setLinnLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center mb-12 mx-auto max-w-md px-8">
      <div className="flex gap-3 items-center">
        <PotatIcon />
        <div className="flex flex-col">
          <h2 className="flex text-lg font-bold items-center mb-0">{name}</h2>
          <div className="flex items-center text-sm justify-center">
            {infoLink && (
              <a
                className="font-medium text-blue-400 dark:text-blue-200 hover:underline"
                href={infoLink}
                target="_blank">
                info
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="mt-2">Anders:</p>
      {andersLoading ? (
        <Spinner aria-label="Updating potats" />
      ) : (
        <Rating size="lg">
          {Array.from({ length: 5 }).map((_, i) => {
            const r = i + 1;
            if (r <= andersRatingRating) {
              return (
                <Rating.Star
                  key={r}
                  onClick={() => updateRating(r - 1, 'anders')}
                  className="hover:cursor-pointer"
                />
              );
            }
            return (
              <Rating.Star
                key={r}
                filled={false}
                onClick={() => updateRating(r, 'anders')}
                className="hover:cursor-pointer"
              />
            );
          })}
        </Rating>
      )}
      Linn:
      {linnLoading ? (
        <Spinner aria-label="Updating potats" />
      ) : (
        <Rating size="lg">
          {Array.from({ length: 5 }).map((_, i) => {
            if (linnLoading) {
              return <Spinner aria-label="Updating potats" />;
            }
            const r = i + 1;
            if (r <= linnRating) {
              return (
                <Rating.Star
                  key={r}
                  onClick={() => updateRating(r - 1, 'linn')}
                  className="hover:cursor-pointer"
                />
              );
            }
            return (
              <Rating.Star
                key={r}
                filled={false}
                onClick={() => updateRating(r, 'linn')}
                className="hover:cursor-pointer"
              />
            );
          })}
        </Rating>
      )}
      <CommentEditor potatoId={potatoId} initialComment={initialComment} />
    </div>
  );
}

function CommentEditor({
  potatoId,
  initialComment,
}: {
  potatoId: string;
  initialComment: string;
}) {
  const [comment, setComment] = useState(initialComment);
  const [editingComment, setEditingComment] = useState(false);
  const [commentSaving, setCommentSaving] = useState(false);

  async function saveComment(potatId: string, currentComment: string) {
    setCommentSaving(true);
    const newComment = await actions.updateComment({
      potatoId: potatId,
      comment: currentComment,
    });
    setComment(newComment.data!);
    setCommentSaving(false);
    setEditingComment(false);
  }

  if (editingComment) {
    return (
      <>
        <Textarea
          id="comment"
          placeholder="Beskriv din opplevelse med poteten.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
        />

        <Button
          isProcessing={commentSaving}
          disabled={commentSaving}
          className="mt-2"
          size="sm"
          onClick={() => saveComment(potatoId, comment)}>
          Lagre
        </Button>
      </>
    );
  }

  if (comment && !editingComment) {
    return (
      <>
        <p className="my-2 text-center">{comment}</p>
        <Button size="xs" outline onClick={() => setEditingComment(true)}>
          Endre kommentar
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        className="mt-2"
        size="xs"
        onClick={() => setEditingComment(true)}>
        Kommenter
      </Button>
    </>
  );
}
